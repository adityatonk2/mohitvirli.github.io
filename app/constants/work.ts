import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
	{
		point: new THREE.Vector3(0, 0, 0),
		year: "2023",
		title: "Intermediate",
		subtitle: "Physic,Chemistry,Maths & CS",
		position: "right",
	},
	{
		point: new THREE.Vector3(-4, -4, -3),
		year: "2023",
		title: "AI-ML & Cloud Computing",
		subtitle: "B. Technology",
		position: "left",
	},
	{
		point: new THREE.Vector3(-3, -1, -6),
		year: "2024",
		title: "Novanector",
		subtitle: "Software Developer Intern",
		position: "left",
	},
	{
		point: new THREE.Vector3(0, -1, -10),
		year: "2025",
		title: "FDC",
		subtitle: "Devops and Fullstack Engineering",
		position: "left",
	},
	{
		point: new THREE.Vector3(1, 1, -12),
		year: new Date().toLocaleDateString("default", { year: "numeric" }),
		title: "FDC-IL",
		subtitle: "Co-Founder",
		position: "right",
	},
];
