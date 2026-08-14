import caseOne from "@/assets/case-1.jpg";
import caseTwo from "@/assets/case-2.jpg";
import caseThree from "@/assets/case-3.jpg";
import facade from "@/assets/facade-mono.jpg";
import tower from "@/assets/hero-tower.jpg";

export const sectors = [
  {
    id: "01",
    title: "Residential Property",
    copy: "Freeholders, RMCs and RTM companies meeting duties under the Building Safety Act.",
    image: tower,
  },
  {
    id: "02",
    title: "Managing Agents",
    copy: "Portfolio-wide assessment programmes with consistent, defensible reporting.",
    image: facade,
  },
  {
    id: "03",
    title: "Developers",
    copy: "Design-stage fire strategy, gateway support and handover documentation.",
    image: caseOne,
  },
  {
    id: "04",
    title: "Housing Associations",
    copy: "Stock-wide risk profiling, remediation prioritisation and resident assurance.",
    image: caseTwo,
  },
  {
    id: "05",
    title: "Education",
    copy: "Campus and school estates: assessments, training and compliance planning.",
    image: caseThree,
  },
  {
    id: "06",
    title: "Commercial Property",
    copy: "Offices, retail and mixed-use assets with complex occupancy and shared risk.",
    image: facade,
  },
];

export const services = [
  {
    id: "01",
    title: "Building Safety",
    copy: "Strategic oversight of your safety obligations across the whole asset lifecycle.",
    image: tower,
  },
  {
    id: "02",
    title: "Building Safety Cases",
    copy: "Evidence-led safety cases and reports prepared for regulator scrutiny.",
    image: facade,
  },
  {
    id: "03",
    title: "FRAEW",
    copy: "Fire Risk Appraisal of External Walls to PAS 9980, with clear remediation routes.",
    image: caseOne,
  },
  {
    id: "04",
    title: "Structural Risk Assessments",
    copy: "Independent structural appraisal where safety and stability intersect.",
    image: caseThree,
  },
  {
    id: "05",
    title: "Fire Risk Assessments",
    copy: "Type 1 to Type 4 assessments delivered by accredited, insured assessors.",
    image: caseTwo,
  },
  {
    id: "06",
    title: "Fire Door Inspections",
    copy: "Sampled and full inspection programmes with photographic asset registers.",
    image: caseTwo,
  },
  {
    id: "07",
    title: "Fire Compartmentation",
    copy: "Surveys of compartment lines, breaches and cavity barriers, floor by floor.",
    image: facade,
  },
  {
    id: "08",
    title: "Project Management",
    copy: "Remediation managed end to end, from specification to sign-off.",
    image: caseOne,
  },
];

export const caseStudies = [
  {
    id: "01",
    title: "Meridian Quarter",
    sector: "Residential — 22 Storeys, Manchester",
    challenge:
      "A high-rise development with unresolved external wall risk and an incomplete safety case ahead of registration.",
    solution:
      "A PAS 9980 FRAEW, full compartmentation survey and a structured safety case built around verified evidence.",
    outcome: "Registered without regulator intervention. Remediation scope reduced by 38%.",
    image: caseOne,
  },
  {
    id: "02",
    title: "Northgate Portfolio",
    sector: "Managing Agent — 140 Buildings",
    challenge:
      "Inconsistent fire risk assessments across a national portfolio with no comparable risk baseline.",
    solution:
      "A single assessment standard, 1,900 fire door inspections and a live prioritisation model.",
    outcome: "One risk register across the estate. Critical actions closed within 90 days.",
    image: caseTwo,
  },
  {
    id: "03",
    title: "Ashfield Campus",
    sector: "Education — Mixed Estate",
    challenge:
      "Phased buildings from 1962 to 2021 with fragmented records and shared escape routes.",
    solution:
      "Estate-wide Type 3 assessments, compartmentation mapping and CPD training for the estates team.",
    outcome: "A defensible compliance position and in-house capability that holds it.",
    image: caseThree,
  },
];

export const hotspots = [
  {
    id: "A",
    label: "Building Safety",
    x: 50,
    y: 18,
    copy: "Whole-asset oversight: duties, dutyholders and the golden thread of information.",
  },
  {
    id: "B",
    label: "External Walls / FRAEW",
    x: 22,
    y: 42,
    copy: "Appraisal of cladding, insulation and cavity barriers to PAS 9980.",
  },
  {
    id: "C",
    label: "Compartmentation",
    x: 74,
    y: 55,
    copy: "Verification of compartment lines, service penetrations and fire stopping.",
  },
  {
    id: "D",
    label: "Fire Doors",
    x: 50,
    y: 79,
    copy: "Inspection of door sets, gaps, seals and closers against FD30 / FD60 standards.",
  },
  {
    id: "E",
    label: "Structural Safety",
    x: 12,
    y: 72,
    copy: "Independent structural risk appraisal of frame, balconies and substructure.",
  },
];

export const insights = [
  {
    category: "Industry Update",
    title: "What the second staircase rule really changes for developers",
    meta: "08 min read",
    image: tower,
  },
  {
    category: "Guide",
    title: "Building a safety case that survives regulator scrutiny",
    meta: "Download",
    image: facade,
  },
  {
    category: "CPD Training",
    title: "Compartmentation, explained for managing agents",
    meta: "60 min session",
    image: caseTwo,
  },
];

export const megaMenu = {
  "WHO WE HELP": sectors.map((s) => s.title),
  SERVICES: services.map((s) => s.title),
};
