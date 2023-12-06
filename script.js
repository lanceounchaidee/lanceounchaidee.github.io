const bar = document.getElementsByClassName('skill-bar')[0]
setInterval(() => {
    const computedStyle = getComputedStyle(bar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    bar.style.setProperty('--width', width + .3)
}, .5)
const bar1 = document.getElementsByClassName('skill-bar')[1]
setInterval(() => {
    const computedStyle = getComputedStyle(bar1)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    bar1.style.setProperty('--width', width + .3)
}, .5)
const bar2 = document.getElementsByClassName('skill-bar')[2]
setInterval(() => {
    const computedStyle = getComputedStyle(bar2)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    bar2.style.setProperty('--width', width + .3)
}, .5)
const bar3 = document.getElementsByClassName('skill-bar')[3]
setInterval(() => {
    const computedStyle = getComputedStyle(bar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    bar3.style.setProperty('--width', width + .3)
}, .5)