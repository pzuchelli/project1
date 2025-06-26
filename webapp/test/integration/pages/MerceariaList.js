sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'groceries.project1',
            componentId: 'MerceariaList',
            contextPath: '/Mercearia'
        },
        CustomPageDefinitions
    );
});