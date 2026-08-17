export const BASE_URL =
  typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
    ? ""
    : "https://prikryljan.eu.pythonanywhere.com";

export function formatMediaUrl(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  const cleanUrl = url.startsWith("/") ? url : `/${url}`;
  if (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) {
    return cleanUrl;
  }
  return `https://prikryljan.eu.pythonanywhere.com${cleanUrl}`;
}


export async function fetchProjects(): Promise<CategorizedProjects> {
  const response = await fetch(`${BASE_URL}/api/load_all`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to load projects: ${response.statusText}`);
  }

  const data: CategorizedProjects = await response.json();

  // Format icon URLs
  const formatList = (list: CategorizedProjects["webs"], categoryName: "webs" | "apps" | "others") =>
    (list || []).map((item) => ({
      ...item,
      url: formatMediaUrl(item.url),
      categoryName
    }));

  return {
    webs: formatList(data.webs, "webs"),
    apps: formatList(data.apps, "apps"),
    others: formatList(data.others, "others")
  };
}

export async function fetchProjectDetail(id: number): Promise<ProjectDetailData> {
  const response = await fetch(`${BASE_URL}/api/load_details`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id })
  });

  if (!response.ok) {
    throw new Error(`Failed to load project details: ${response.statusText}`);
  }

  const data: ProjectDetailData = await response.json();

  return {
    ...data,
    screenshots: (data.screenshots || []).map((shot) => ({
      ...shot,
      original: formatMediaUrl(shot.original)
    }))
  };
}

export async function sendContactMessage(messageData: ContactMessageData): Promise<boolean> {
  const response = await fetch(`${BASE_URL}/api/save_message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(messageData)
  });

  return response.ok;
}
