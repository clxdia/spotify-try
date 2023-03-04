// Because this is a literal single page application
// we detect a callback from Spotify by checking for the hash fragment
import { redirectToAuthCodeFlow, getAccessToken } from "./authCodeWithPkce";

const clientId = import.meta.env.VITE_CLIENT_ID;
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (!code) {
  redirectToAuthCodeFlow(clientId);
} else {
  const accessToken = await getAccessToken(clientId, code);
  const profile = await fetchProfile(accessToken);
  populateUI(profile);
}

async function fetchProfile(code: string): Promise<UserProfile> {
  const result = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20",
    {
      method: "GET",
      headers: { Authorization: `Bearer ${code}` },
    }
  );

  return await result.json();
}

function populateUI(profile: UserProfile) {
  document.getElementById("displayName")!.innerText = profile.name;

  document.getElementById("email")!.innerText = profile.album.name;
}
