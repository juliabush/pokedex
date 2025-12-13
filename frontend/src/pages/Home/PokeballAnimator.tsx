import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import PokeballModel from "./PokeballModel";

type Phase = "idle" | "shaking" | "opening";
