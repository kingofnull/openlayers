/**
 * @module ol/render/Event
 */
import {inherits} from '../index.js';
import Event from '../events/Event.js';

/**
 * @constructor
 * @extends {module:ol/events/Event~Event}
 * @implements {oli.render.Event}
 * @param {module:ol/render/EventType~EventType} type Type.
 * @param {module:ol/render/VectorContext~VectorContext=} opt_vectorContext Vector context.
 * @param {module:ol/PluggableMap~FrameState=} opt_frameState Frame state.
 * @param {?CanvasRenderingContext2D=} opt_context Context.
 * @param {?module:ol/webgl/Context~WebGLContext=} opt_glContext WebGL Context.
 */
const RenderEvent = function(
  type, opt_vectorContext, opt_frameState, opt_context,
  opt_glContext) {

  Event.call(this, type);

  /**
   * For canvas, this is an instance of {@link ol.render.canvas.Immediate}.
   * @type {module:ol/render/VectorContext~VectorContext|undefined}
   * @api
   */
  this.vectorContext = opt_vectorContext;

  /**
   * An object representing the current render frame state.
   * @type {module:ol/PluggableMap~FrameState|undefined}
   * @api
   */
  this.frameState = opt_frameState;

  /**
   * Canvas context. Only available when a Canvas renderer is used, null
   * otherwise.
   * @type {CanvasRenderingContext2D|null|undefined}
   * @api
   */
  this.context = opt_context;

  /**
   * WebGL context. Only available when a WebGL renderer is used, null
   * otherwise.
   * @type {module:ol/webgl/Context~WebGLContext|null|undefined}
   * @api
   */
  this.glContext = opt_glContext;

};

inherits(RenderEvent, Event);
export default RenderEvent;
