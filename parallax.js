(function() {
            
            var documentEl = $(document),
                backgroundR = $('.container2');
            
            documentEl.on('scroll', function() {
                var currScrollPos = documentEl.scrollTop();
                BackgroundR.css('background-position', '0 ' + -currScrollPos/6 + 'px');
            });})();
