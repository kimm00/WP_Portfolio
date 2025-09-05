/**
 * GitHub Integration Script
 * - Fetches profile data using GitHub REST API
 * - Renders repository cards with key details
 * - Includes hover effects and error handling
 * - Supports dark theme and modular design
 */

const username = "kimm00";  // Change to your GitHub username if needed

// Fetch and render GitHub user profile
async function fetchGitHubProfile() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    const profileHTML = `
      <img src="${data.avatar_url}" alt="Profile Image" width="120" style="border-radius: 50%;">
      <h2>${data.name}</h2>
      <p>${data.bio || "No bio available"}</p>
      <p>Repos: ${data.public_repos} | Followers: ${data.followers} | Following: ${data.following}</p>
      <a href="${data.html_url}" target="_blank">View GitHub</a>
    `;

    document.getElementById("github-profile").innerHTML = profileHTML;

  } catch (error) {
    console.error("❌ Failed to load profile:", error);
    document.getElementById("github-profile").textContent = "⚠️ Failed to load profile";
  }
}

// Fetch and render public repositories
async function fetchGitHubRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    const repoHTML = repos.map(repo => `
      <div class="project-circle">
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description"}</p>
        <p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
        <p><strong>${repo.language || "N/A"}</strong></p>
        <p>🕒 Updated: ${new Date(repo.updated_at).toLocaleDateString()}</p>
        <a href="${repo.html_url}" target="_blank">View Repo</a>
      </div>
    `).join("");

    document.getElementById("github-repos").innerHTML = repoHTML;

  } catch (error) {
    console.error("❌ Failed to load repositories:", error);
    document.getElementById("github-repos").textContent = "⚠️ Failed to load repositories";
  }
}

// Trigger both functions on page load
document.addEventListener("DOMContentLoaded", () => {
  fetchGitHubProfile();
  fetchGitHubRepos();
});

