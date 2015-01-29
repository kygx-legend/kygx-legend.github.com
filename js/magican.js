$(document).ready(function(){
    // get webgl context on different platforms.
    function getWebGLContext() {
        var webGLContext;
        /* Context name can differ according to the browser used */
        /* Store the context name in an array and check its validity */
        var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
        for (var i = 0; i < names.length; ++i) {
            try {
                webGLContext = canvas.getContext(names[i]);
            } catch(e) {
                alert("Error: " + e.toString());
            }
            if (webGLContext)
                break;
        }

        return webGLContext;
    }

    // clear gl buffer.
    function clearBuffer() {
        var canvas = document.getElementById("magican");
        var gl = getWebGLContext(canvas);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    // cover the namespace.
    window.eval('var getWebGLContext = ' + getWebGLContext.toString() + ';');
    window.eval('var clearBuffer = ' + clearBuffer.toString() + ';');
    window.eval('var canvas = document.getElementById("magican");');
    window.eval('var gl = getWebGLContext(canvas);');

    // jquery terminal build.
    var terminal_config = {
        greetings: 'Welcome to Magican! Here you can write Javascript Code directly to draw on the Canvas!\n Usage:\n Offer one object `gl`.\n $ gl.drawArrays(gl.POINTS, 0, 1)\n $ clearBuffer()',
        name: 'Magican',
        height: 200,
        prompt: 'Magican $ '
    };
    $('#terminal').terminal(function(command, term) {
        if (command !== '') {
            try {
                var result = window.eval(command);
                if (result !== undefined) {
                    term.echo(new String(result));
                }
            } catch (e) {
                term.error(new String(e));
            };
        } else {
            term.echo('');
        }
    }, terminal_config);
});
