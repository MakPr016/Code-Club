// src/components/Loading.jsx
const Loading = ({ animateOut, onAnimationEnd }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-1000 ${
        animateOut ? 'opacity-0' : 'opacity-100'
      }`}
      onTransitionEnd={onAnimationEnd}
    >
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#strongGlow)" transform="translate(150, 150)">
          {/* Outer circle */}
          <circle r="70" fill="none" stroke="#ccc" strokeWidth="1.5" opacity="0.6">
            <animate attributeName="r" values="70;80;70" dur="5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.3;0.6" dur="4s" repeatCount="indefinite" />
            <animate attributeName="stroke-dasharray" values="1,10;1,20;1,10" dur="7s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="30s" repeatCount="indefinite" />
          </circle>

          {/* Middle circle */}
          <circle r="50" fill="none" stroke="#999" strokeWidth="2" opacity="0.7">
            <animate attributeName="r" values="50;55;50" dur="6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0.4;0.7" dur="5s" repeatCount="indefinite" />
            <animate attributeName="stroke-dasharray" values="5,15;10,20;5,15" dur="9s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="20s" repeatCount="indefinite" />
          </circle>

          {/* Inner circle */}
          <circle r="30" fill="none" stroke="#fff" strokeWidth="2" opacity="0.8">
            <animate attributeName="r" values="30;35;30" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.5;0.8" dur="3s" repeatCount="indefinite" />
            <animate attributeName="stroke-dasharray" values="0;188.5;0" dur="5s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="15s" repeatCount="indefinite" />
          </circle>

          {/* Geometric glowing shards */}
          <path d="M0,0 L20,0 A20,20 0 0,1 10,17.3 z" fill="#ddd" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M0,0 L-20,0 A20,20 0 0,0 -10,-17.3 z" fill="#bbb" opacity="0.9">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M0,0 L10,17.3 A20,20 0 0,1 -10,17.3 z" fill="#aaa" opacity="0.9">
            <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M0,0 L-10,-17.3 A20,20 0 0,1 10,-17.3 z" fill="#888" opacity="0.9">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
          </path>

          {/* Pulsating center */}
          <circle r="5" fill="#ffffff" opacity="1">
            <animate attributeName="r" values="5;8;5" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Orbiting dots */}
          <circle cx="40" cy="0" r="3" fill="#fff" opacity="0.8">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite" />
            <animate attributeName="r" values="3;4;3" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="60" r="2" fill="#fff" opacity="0.7">
            <animateTransform attributeName="transform" type="rotate" from="90" to="450" dur="12s" repeatCount="indefinite" />
            <animate attributeName="r" values="2;4;2" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="-55" cy="0" r="2.5" fill="#fff" opacity="0.8">
            <animateTransform attributeName="transform" type="rotate" from="180" to="540" dur="10s" repeatCount="indefinite" />
            <animate attributeName="r" values="2.5;3.5;2.5" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  )
}

export default Loading
