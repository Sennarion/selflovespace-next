export function setCookies(value, func) {
  if (typeof window !== "undefined") {
    const currentDate = new Date().toISOString().slice(0, 10);
    const expiresDate = new Date();
    expiresDate.setTime(expiresDate.getTime() + 365 * 24 * 60 * 60 * 1000);
    const expires = "expires=" + expiresDate.toUTCString();

    window.localStorage.setItem(
      "cookiesAccepted",
      JSON.stringify({ accepted: value, date: currentDate })
    );

    document.cookie = `cookiesAccepted=${value}; ${expires};`;
  }

  func(false);
}

export function checkCookies() {
  if (typeof window !== "undefined") {
    const cookiesAccepted = window.localStorage.getItem("cookiesAccepted");

    if (cookiesAccepted) {
      const { accepted, date } = JSON.parse(cookiesAccepted);
      const currentDate = new Date().toISOString().slice(0, 10);

      if (accepted && date) {
        const acceptedDate = new Date(date);
        acceptedDate.setFullYear(acceptedDate.getFullYear() + 1);

        return new Date(currentDate) >= acceptedDate;
      }
    } else {
      return true;
    }
  }
  return false;
}
