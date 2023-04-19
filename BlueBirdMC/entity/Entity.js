/******************************************\
 *  ____  _            ____  _         _  *
 * | __ )| |_   _  ___| __ )(_)_ __ __| | *
 * |  _ \| | | | |/ _ \  _ \| | '__/ _` | *
 * | |_) | | |_| |  __/ |_) | | | | (_| | *
 * |____/|_|\__,_|\___|____/|_|_|  \__,_| *
 *                                        *
 * This file is licensed under the MIT    *
 * License. To use or modify it you must  *
 * accept the terms of the license.       *
 * ___________________________            *
 * \ @author BlueBirdMC Team /            *
\******************************************/

const Vector2F = require("../network/types/Vector2F");
const EntityMetadataStorage = require("./EntityMetadataStorage");

class Entity {
    id = 0;
    metadataStorage;
    scaleValue = 1.0;
    onFire = false;
    fireImmune = false;
    noAI = false;
    canClimb = true;
    canDash = true;
    canFly = false;
    canPowerJump = true;
    swimming = false;
    hasCollision = true;
    affectedByGravity = true;
    boundingBox;

    constructor() {
        this.id++;
        this.metadataStorage = new EntityMetadataStorage();
        this.boundingBox = new Vector2F();
    }
}

module.exports = Entity;
