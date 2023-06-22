export function setCookies(value, func) {
  const currentDate = new Date().toISOString().slice(0, 10);
  window.localStorage.setItem(
    "cookiesAccepted",
    JSON.stringify({ accepted: value, date: currentDate })
  );
  const d = new Date();
  d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = `cookiesAccepted=${value}; expires=${expires}; path=/`;
  func(false);
}

export function checkCookies() {
  const cookiesAccepted = window.localStorage.getItem("cookiesAccepted");

  if (cookiesAccepted) {
    const { accepted, date } = JSON.parse(cookiesAccepted);
    const currentDate = new Date().toISOString().slice(0, 10);

    if (accepted && date) {
      const acceptedDate = new Date(date);
      acceptedDate.setFullYear(acceptedDate.getFullYear() + 1);

      if (new Date(currentDate) >= acceptedDate) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return true;
  }
}
