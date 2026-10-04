"use client";

import { LOCATION_CONFIG } from "@/data/content";

/**
 * SECTION 10: LOCATION AND CONTACT (id="contact")
 * Condition: render ONLY once the owner fills the base city in the content file ([FILL: base city]).
 * Until then, do not render a map or any city name anywhere except the footer line already confirmed.
 */
export function LocationContact() {
  if (!LOCATION_CONFIG.baseCity) {
    return null;
  }

  return (
    <section id="contact" className="section-spacing relative bg-[#FBF6EE]">
      <div className="container-main">
        {/* Rendered only when baseCity is confirmed */}
      </div>
    </section>
  );
}
