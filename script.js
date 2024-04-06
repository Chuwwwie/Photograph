replay = lines = document.querySelector( 'a' )

setLineHeight = ->
  lines = document.querySelectorAll( 'div' )
  height = window.innerHeight
  i = lines.length
  while i--
    lines[ i ].style.lineHeight = height + 'px'

resetAnimation = ( e ) ->
  e.preventDefault()
  lines = document.querySelectorAll( 'div' )
  i = lines.length
  while i--
    elem = lines[ i ]
    clone = elem.cloneNode( true )
    elem.parentNode.replaceChild( clone, elem )

setLineHeight()
window.addEventListener( 'resize', setLineHeight )
replay.addEventListener( 'click', resetAnimation 
