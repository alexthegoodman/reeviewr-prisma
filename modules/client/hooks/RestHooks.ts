import React, { useState, useEffect, createContext } from "react";
import {
  status as statusConstants,
  state as stateConstants,
} from "../constants";
import Hawaii from "../services/Hawaii";
import Oahu from "../../services/Oahu";

const superagent = require("superagent");

// TODO: Consider which services to transform to hooks
// TODO: Consolidate services and hooks into npm package(s)

// TODO: Polling, Plugins like superagent-throttle

export const defaultOptions = {
  headers: {},
  logging: false,
  fetchOnMount: true,
  formatEndpoint: true,
  creds: true,
  json: true,
  onFinished: () => console.info("finished"),
  onSuccess: (data = null) => console.info("success", data),
  onFailure: (err = null) => console.info("failure", err),
};

export const useSuperFetch = (
  endpoint = "",
  method = "GET",
  params = {},
  customOptions = defaultOptions
) => {
  try {
    const hawaii = new Hawaii();
    const oahu = new Oahu();
    const options = { ...defaultOptions, ...customOptions };

    const [status, setStatus] = useState(statusConstants.NONE);
    const [state, setState] = useState(stateConstants.NONE);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const doFetch = (addtParams = {}) => {
      oahu.logs.write("SUPERFETCH INITIATE", "info", options.logging);

      let chain;
      switch (method) {
        case "POST":
        case "PATCH":
          chain = superagent
            .post(
              options.formatEndpoint
                ? hawaii.strings.formatUrl(endpoint)
                : endpoint
            )
            .type("form")
            .send({ ...params, ...addtParams })
            .on("error", setError);
          break;
        case "GET":
          chain = superagent
            .get(
              options.formatEndpoint
                ? hawaii.strings.formatUrl(endpoint)
                : endpoint
            )
            .on("error", setError);
          break;
      }

      if (options.creds) {
        chain.withCredentials();
      }

      if (options.json) {
        chain.set("accept", "json");
      }

      if (
        typeof options.headers !== "undefined" &&
        options.headers !== null &&
        Object.keys(options.headers).length > 0
      ) {
        chain.set(options.headers);
      }

      setLoading(true);
      setState(stateConstants.CALLING);

      chain
        .then((data) => {
          setState(stateConstants.FINISHED);
          setStatus(statusConstants.SUCCESS);
          setLoading(false);
          setData(data);
          options.onFinished();
          options.onSuccess(data);
          oahu.logs.write("SUPERFETCH SUCCESS", "info", options.logging);
        })
        .catch((error) => {
          setState(stateConstants.FINISHED);
          setStatus(statusConstants.FAILURE);
          setLoading(false);
          setError(error);
          options.onFinished();
          options.onFailure(error);
          oahu.logs.write("SUPERFETCH FAILURE", "error", options.logging);
        });
    };

    useEffect(() => {
      if (options.fetchOnMount && data === null && loading === false) {
        doFetch();
      }
    }, []);

    return {
      loading,
      status,
      state,
      error,
      data,
      doFetch,
      statusConstants,
      stateConstants,
    };
  } catch (error) {
    console.error("SUPERFETCH ERROR:", error);
    throw Error(error);
  }
};

export const useSimpleFetch = (
  endpoint = "",
  method = "GET",
  params = {},
  headers = {},
  options = {},
  fetchOnMount = true,
  formatEndpoint = true
) => {
  const oahu = new Oahu();
  const [status, setStatus] = useState(statusConstants.NONE);
  const [state, setState] = useState(stateConstants.NONE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const [overTimeOut, setOverTimeOut] = useState(false);

  const doFetch = () => {
    setLoading(true);
    setState(stateConstants.CALLING);

    const FETCH_TIMEOUT = 15000;

    const timeout = setTimeout(function () {
      setOverTimeOut(true);
      setState(stateConstants.TIMEDOUT);
      setStatus(statusConstants.NONE);
      setLoading(false);
      setData(null);
    }, FETCH_TIMEOUT);

    fetch(endpoint, options)
      .then(function (response) {
        clearTimeout(timeout);
        setState(stateConstants.FINISHED);
        setStatus(statusConstants.SUCCESS);
        setLoading(false);
        setData(response.json());
        oahu.logs.write("SIMPLEFETCH SUCCESS", "info", false);
      })
      .catch(function (error) {
        clearTimeout(timeout);
        setState(stateConstants.FINISHED);
        setStatus(statusConstants.FAILURE);
        setLoading(false);
        setError(error);
        oahu.logs.write("SIMPLEFETCH FAILURE", "error", false);
      });
  };

  useEffect(() => {
    if (fetchOnMount) {
      doFetch();
    }
  });

  return {
    loading,
    status,
    state,
    error,
    data,
    doFetch,
    statusEnum: status,
    stateEnum: state,
  };
};
