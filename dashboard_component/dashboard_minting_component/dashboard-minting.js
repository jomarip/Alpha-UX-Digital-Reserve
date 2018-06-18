window.onload = function onLoad() {

    var semiBar = new ProgressBar.SemiCircle("#minting-progress-container", {
        strokeWidth: 7,
        trailWidth: 7,
        trailColor: "#e6e6e6",
        easing: "bounce",
        from: { color: "#3f9dfe", width: 7 },
        to: { color: "#3f9dfe", width: 7 },
        text: {
          value: '0',
          className: 'progress-text',
          style: {
            position: 'absolute',
            top: '51px',
            left: '50%',
            padding: 0,
            margin: 0,
            transform: null
          }
        },
        step: (state, shape) => {
          shape.path.setAttribute("stroke", state.color);
          shape.path.setAttribute("stroke-width", state.width);
          shape.setText('<span class="progress-value">'+Math.round(shape.value() * 100)+'</span> <span class="progress-percent">%</span>');
        }
      });
      semiBar.animate(0.75, {
        duration: 2000
      });
        };