function generateLinks(contacts) {
  const userLinks = contacts
    .map((contact) => {
      const url = new URL(contact);
      const hostname = url.hostname;
      if (SUPPORTED_SOCIAL_NETWORKS.has(hostname)) {
        const link = createElement("a", {
          classNames: SUPPORTED_SOCIAL_NETWORKS.get(hostname),
          attrs: { href: contact, target: "_blank " },
        });
        return link;
      }
    })
    .filter(Boolean);
  return userLinks;
}
