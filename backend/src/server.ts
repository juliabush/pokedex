import express from "express";
import cors from "cors";
import { initState } from "./state.js";
import { commandCatch } from "./command_catch.js";
import { commandMap } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandInspect } from "./command_inspect.js";
import { commandHelp } from "./command_help.js";

const app = express();
app.use(cors());
app.use(express.json());

const state = initState();

app.get("/help", (_req, res) => {
  res.json(commandHelp(state));
});
// _req notation to signify that the parameter
//  is unused but standard in function signature

app.get("/map", async (_req, res) => {
  res.json(await commandMap(state));
});

app.get("/explore/:location", async (req, res) => {
  res.json(await commandExplore(state, req.params.location));
});

app.post("/catch", async (req, res) => {
  const { name } = req.body;
  res.json(await commandCatch(state, name));
});

app.get("/inspect/:name", (req, res) => {
  res.json(commandInspect(state.req.params.name));
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
