export default function handler(request, response) {
    response.setHeader("Content-Type", "image/svg+xml");

    const svgString = `
<svg width="500" fill="" height="250" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes fadeIn {
          from, to { opacity: 0 }
          50% { opacity: 1; }
      }
      .indicator {
        animation: fadeIn 1s;
        animation-iteration-count: infinite;
      }
      .text {
        font-family: &apos;Helvetica&apos;, sans-serif;
      }
  </style>
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(0)">
      <stop offset="0" stop-color="red">
        <animate attributeName="stop-color" values="red;green;blue;pink;yellow;orange;red;purple" dur="10s" repeatCount="indefinite"/>
      </stop>
      <stop offset="1" stop-color="purple" stop-opacity="purple">
        <animate attributeName="stop-color" values="purple;blue;green;yellow;orange;red;purple;" dur="10s" repeatCount="indefinite"/>
      </stop>
      <stop offset="2" stop-color="red" stop-opacity="0">
        <animate attributeName="stop-color" values="red;orange;yellow;green;blue;indigo;violet;" dur="10s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="white"/>
  <text x="47%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="url(#gradient)" font-size="6rem" class="text">ODDS</text>
  <rect x="77%" y="16%" width="11" height="55%" class="indicator" fill="url(#gradient)"/>
</svg>

  `;

    return response.send(svgString);
}
