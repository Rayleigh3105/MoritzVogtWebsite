
jQuery(document).ready(function() {
    jQuery('.infoBox').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated bounceIn',
        offset: 100
       });
    
     jQuery('#HeaderBounceIn').viewportChecker({
        classToAdd: 'visible animated bounceIn',
        offset: 100
       });
    
     jQuery('#slideInDown').viewportChecker({
        classToAdd: 'visible animated slideInDown',
        offset: 100
       });
    
     jQuery('#fadeInLeft').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
       });
    
     jQuery('#fadeInRight').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 100
       });
     jQuery('.responsiveP').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 100
       });
    
     jQuery('#fadeInLeftP').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
       });
     jQuery('.ueberschrift_infobox').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 100
       });
    
    
    
});
