import React from "react";
import Tree from "react-d3-tree";

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const pokeInfoChart = {
  name: "Main",
  children: [
    {
      name: "App",
      attributes: {
        hooks: "useLightMode",
      },
      children: [
        {
          name: "Home",
          attributes: {
            // department: "Fabrication",
          },
        },
        {
          name: "TeamDisplay",
          attributes: {
            hooks: "useWebSocket, useNoSpectator",
          },
          children: [
            {
              name: "PokemonDataDisplay",
              attributes: {
                hooks: "usePokemon",
              },
              children: [
                { name: "TypeDisplay" },
                { name: "DamageDisplay" },
                { name: "StatsDisplay" },
                {
                  name: "RandomBattlePokemonDisplay",
                  attributes: {
                    hooks: "useRandomBattleData",
                  },
                  children: [
                    { name: "RolesDisplay" },
                    { name: "AbilitiesDisplay" },
                    { name: "ItemsDisplay" },
                    { name: "MovesDisplay" },
                  ],
                },
                { name: "NoPokemonFound" },
                {
                  name: "OtherFormatsDisplay",
                  children: [{ name: "AbilitiesDisplay" }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
export default function TreeComp() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: "100%", height: "100vh" }}>
      <Tree
        orientation={"vertical"}
        separation={{ nonSiblings: 2, siblings: 2 }}
        pathFunc={"step"}
        data={pokeInfoChart}
        rootNodeClassName={"node__root"}
        leafNodeClassName={"node__leaf"}
        branchNodeClassName={"node__branch"}
      />
    </div>
  );
}
