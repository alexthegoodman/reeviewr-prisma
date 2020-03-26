import Photon from "@generated/photon";
import * as faker from "faker";

const photon = new Photon();

export default async function seedTags() {
  const tagSchema = {
    // itemName: "2019",
    itemContent: "",
    itemType: "default",
    itemStatus: "active",
  };

  const tag1 = await photon.tags.create({
    data: {
      ...tagSchema,
      itemName: "2019",
    },
  });
  const tag2 = await photon.tags.create({
    data: {
      ...tagSchema,
      itemName: "Space",
    },
  });

  return {
    tag1,
    tag2,
  };
}
