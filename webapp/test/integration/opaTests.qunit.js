sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'groceries/project1/test/integration/FirstJourney',
		'groceries/project1/test/integration/pages/MerceariaList',
		'groceries/project1/test/integration/pages/MerceariaObjectPage'
    ],
    function(JourneyRunner, opaJourney, MerceariaList, MerceariaObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('groceries/project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMerceariaList: MerceariaList,
					onTheMerceariaObjectPage: MerceariaObjectPage
                }
            },
            opaJourney.run
        );
    }
);