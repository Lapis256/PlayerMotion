/**
 * playerMotion.js
 *
 * These codes are licensed under CC0.
 * http://creativecommons.org/publicdomain/zero/1.0/deed
 */

/**
 * @typedef {import("@minecraft/server").Vector3} Vector3
 * @typedef {import("@minecraft/server").Player} Player
 */

/**
 * @param {Player} player
 */
export function playerClearVelocity(player) {
    const { x, y } = player.getRotation();
    player.teleport(player.location, player.dimension, x, y, false);
}

/**
 * @param {Player} player
 * @param {Vector3} vector
 */
export function playerApplyImpulse(player, { x, y, z }) {
    player.applyKnockback(x, z, Math.sqrt(x ** 2 + z ** 2) * 2.5, y);
}
