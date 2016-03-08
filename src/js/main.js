'use strict';

import trackErrors from './track-js-errors';
import $ from 'jquery';

trackErrors();
$('html').addClass('js');
