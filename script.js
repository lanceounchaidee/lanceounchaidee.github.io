const bar = document.getElementsByClassName('skill-bar')[0]
setInterval(() => {
    const computedStyle = getComputedStyle(bar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    bar.style.setProperty('--width', width + .1)
}, 5)