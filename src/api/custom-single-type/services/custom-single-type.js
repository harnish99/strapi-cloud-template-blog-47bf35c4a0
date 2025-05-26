'use strict';

/**
 * custom-single-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custom-single-type.custom-single-type');
