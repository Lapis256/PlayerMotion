/**
 * playerMotion.ts
 *
 * These codes are licensed under CC0.
 * http://creativecommons.org/publicdomain/zero/1.0/deed
 */

import { Player, Vector3 } from "@minecraft/server";

export function playerClearVelocity(player: Player) {
    player.applyKnockback(0, 0, 0, 0);
}

export function playerSetVelocity(player: Player, { x, y, z }: Vector3) {
    player.applyKnockback(x, z, Math.sqrt(x ** 2 + z ** 2) * 2.5, y);
}
