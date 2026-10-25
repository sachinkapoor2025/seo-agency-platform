export const enquiryStatuses = ["New", "In Progress", "Resolved"] as const;

export type EnquiryStatus = (typeof enquiryStatuses)[number];

export type DemoEnquiry = {
  id: string;
  name: string;
  email: string;
  service: string;
  source: string;
  status: EnquiryStatus;
  createdOn: string;
};

export const demoEnquiries: DemoEnquiry[] = [
  {
    id: "ENQ-1022",
    name: "Leah Okonkwo",
    email: "leah.okonkwo@example.com",
    service: "On-Page SEO",
    source: "Website demo form",
    status: "New",
    createdOn: "2026-10-22",
  },
  {
    id: "ENQ-1004",
    name: "Isla Moreau",
    email: "isla.moreau@example.com",
    service: "E-commerce SEO",
    source: "Website demo form",
    status: "New",
    createdOn: "2026-10-21",
  },
  {
    id: "ENQ-1031",
    name: "Sofia Almeida",
    email: "sofia.almeida@example.com",
    service: "Answer Engine Optimization",
    source: "Website demo form",
    status: "New",
    createdOn: "2026-10-20",
  },
  {
    id: "ENQ-1048",
    name: "Avery Quinn",
    email: "avery.quinn@example.com",
    service: "Technical SEO",
    source: "Website demo form",
    status: "New",
    createdOn: "2026-10-18",
  },
  {
    id: "ENQ-1042",
    name: "Mina Kapoor",
    email: "mina.kapoor@example.com",
    service: "Content Strategy",
    source: "Illustrative referral",
    status: "In Progress",
    createdOn: "2026-10-12",
  },
  {
    id: "ENQ-1014",
    name: "Chloe Rahman",
    email: "chloe.rahman@example.com",
    service: "Technical SEO",
    source: "Website demo form",
    status: "In Progress",
    createdOn: "2026-10-08",
  },
  {
    id: "ENQ-1027",
    name: "Noah Bennett",
    email: "noah.bennett@example.com",
    service: "AI Search Visibility",
    source: "Illustrative referral",
    status: "In Progress",
    createdOn: "2026-10-04",
  },
  {
    id: "ENQ-1036",
    name: "Elliot Marsh",
    email: "elliot.marsh@example.com",
    service: "E-commerce SEO",
    source: "Sample import",
    status: "Resolved",
    createdOn: "2026-09-28",
  },
  {
    id: "ENQ-1018",
    name: "Hugo Larsen",
    email: "hugo.larsen@example.com",
    service: "Generative Engine Optimization",
    source: "Sample import",
    status: "Resolved",
    createdOn: "2026-09-15",
  },
  {
    id: "ENQ-1009",
    name: "Owen Blake",
    email: "owen.blake@example.com",
    service: "Content Strategy",
    source: "Illustrative referral",
    status: "Resolved",
    createdOn: "2026-08-30",
  },
];

export type EnquiryCounts = {
  total: number;
  new: number;
  inProgress: number;
  resolved: number;
};

export function enquiryCounts(enquiries: DemoEnquiry[]): EnquiryCounts {
  return {
    total: enquiries.length,
    new: enquiries.filter((enquiry) => enquiry.status === "New").length,
    inProgress: enquiries.filter((enquiry) => enquiry.status === "In Progress").length,
    resolved: enquiries.filter((enquiry) => enquiry.status === "Resolved").length,
  };
}

export function recentEnquiries(enquiries: DemoEnquiry[], limit = 5) {
  return [...enquiries]
    .sort((left, right) => right.createdOn.localeCompare(left.createdOn))
    .slice(0, limit);
}
