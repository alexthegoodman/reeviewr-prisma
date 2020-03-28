import Photon from "@generated/photon";
import * as faker from "faker";

const photon = new Photon();

export default async function seedCats() {
  const catSchema = {
    // itemName: "Music",
    itemContent: "",
    itemType: "default",
    itemStatus: "active",
  };

  const cat1 = await photon.categories.create({
    data: {
      ...catSchema,
      itemName: "Music",
    },
  });

  const cat2 = await photon.categories.create({
    data: {
      ...catSchema,
      itemName: "Painting",
    },
  });

  return {
    cat1,
    cat2,
  };
}
