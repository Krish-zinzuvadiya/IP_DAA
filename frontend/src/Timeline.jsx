import React from "react";

export default function Timeline({ selected = [], final = false }) {

  return (
    <div className="timeline">

      {selected.map((a, i) => {

        const duration = a[2] - a[1];

        // Ensure minimum width
        const width = Math.max(duration * 80, 120);

        // ⭐ Gap Logic
        let marginLeft = 0;

        if (i > 0) {
          const prevFinish = selected[i - 1][2];
          const gap = a[1] - prevFinish;

          if (gap > 0) {
            marginLeft = gap * 20;
          }
        }

        return (
          <div
            key={i}
            className={`block ${final ? "highlight" : ""}`}
            style={{
              width: width + "px",
              marginLeft: marginLeft + "px"
            }}
          >
            {a[1]} - {a[2]}
          </div>
        );
      })}

    </div>
  );
}
