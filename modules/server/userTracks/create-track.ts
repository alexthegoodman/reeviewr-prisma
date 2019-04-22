// generate waveform, resize images, limits, even size requirement on cover art size

export const createTrack = (req, res) => {
  console.info(req);
  res.status(200);
  res.send({ success: true });
  res.end();
};
