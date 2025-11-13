import { useState } from "react";

export default function RequirementsAccordion({
  country,
  requirements,
  activeIndex,
}) {
  if (!requirements || requirements.length === 0) {
    return null;
  }

  return (
    <div className="requirements-wrapper-single-visa">
      <div className="row">
        <div className="col-12 col-md-5">
          <div className="requirements-single-visa-heading">
            <h2>{country} Requirements</h2>
          </div>
        </div>

        <div className="col-12 col-md-7">
          <div className="requirements-single-visa-all accordion-all">
            {requirements.map((req, i) => (
              <SingleAccordion
                key={`${activeIndex}-${i}`}
                title={req.section_title}
                content={req.content}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SingleAccordion({ title, content, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`accordion-single ${open ? "open" : ""}`}>
      <div className="accordion-single__title" onClick={() => setOpen(!open)}>
        <span>{open ? "−" : "+"}</span>
        <h3>{title}</h3>
      </div>

      {open && (
        <div className="accordion-single__text">
          {typeof content === "string" && <p>{content}</p>}

          {typeof content === "object" && (
            <>
              {content.text && <p>{content.text}</p>}

              {content.list && (
                <ul>
                  {content.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </>
          )}

          {content?.cta?.text && (
            <a href={content.cta.link} className="btn-all mt-2">
              {content.cta.text}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
