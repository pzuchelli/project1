sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'groceries.project1',
            componentId: 'MerceariaObjectPage',
            contextPath: '/Mercearia'
        },
        CustomPageDefinitions
    );
});