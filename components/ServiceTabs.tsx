'use client';

import Link from 'next/link';
import { useState } from 'react';
import { services } from '@/lib/content';

export default function ServiceTabs() {
  const [active, setActive] = useState(0);
  const service = services[active];

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
      return;
    }
    const step = event.key === 'ArrowRight' ? 1 : -1;
    const next = (active + step + services.length) % services.length;
    setActive(next);
    document.getElementById(`service-tab-${next}`)?.focus();
  };

  return (
    <div className="reveal">
      <div className="tab-list" role="tablist" aria-label="Services" onKeyDown={onKeyDown}>
        {services.map((item, index) => (
          <button
            key={item.slug}
            id={`service-tab-${index}`}
            role="tab"
            type="button"
            className="tab"
            aria-selected={index === active}
            aria-controls="service-panel"
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div id="service-panel" role="tabpanel" aria-labelledby={`service-tab-${active}`} className="tab-panel">
        <div className="tab-panel-copy">
          <span className="badge">{service.badge}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <Link href={`/services/${service.slug}`} className="btn-primary">
            Explore {service.badge.toLowerCase()} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="tab-side">
          <p className="tab-side-label">What you get:</p>
          <div className="tile-grid">
            {service.highlights.map((item) => (
              <div key={item.title} className="tile">
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
          <p className="tab-foot">
            <strong>Proof:</strong> {service.proof}. {service.cta}
          </p>
        </div>
      </div>
    </div>
  );
}
