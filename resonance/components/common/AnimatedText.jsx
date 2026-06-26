import React from "react";

export default function AnimatedText({
  text = "Grow your business with a new website.",
  style = {},
}) {
  return (
    <>
      <span
        className="wow charsAnimIn words chars splitting"
        data-splitting="chars"
        aria-hidden="true"
        style={{
          "--word-total": text.split(" ").length,
          "--char-total": text.split("").length,
          visibility: "visible",
          textTransform: "none",
          ...style,
        }}
      >
        {text
          .trim()
          .split(" ")
          .map((elm, i) => (
            <React.Fragment key={i}>
              <span
                className="word"
                data-word="Grow"
                style={{ "--word-index": i, textTransform: "none" }}
              >
                {elm.split("").map((elm2, i2) => (
                  <span
                    key={i2}
                    className="char"
                    data-char="G"
                    style={{ "--char-index": i + i2, textTransform: "none" }}
                  >
                    {elm2}
                  </span>
                ))}
              </span>
              <span className="whitespace"> </span>
            </React.Fragment>
          ))}
      </span>
    </>
  );
}
