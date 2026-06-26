export function getProjectCardId(title) {
    return `project-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`
}
