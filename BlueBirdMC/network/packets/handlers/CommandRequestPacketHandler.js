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

const CommandOriginDataTypes = require("../../constants/CommandOriginDataTypes");
const HandlersBase = require("./HandlersBase");

class CommandRequestPacketHandler extends HandlersBase {
    async startHandling(packet) {
        super.startHandling(packet);
        if (packet.data.typeID !== CommandOriginDataTypes.player) {
            return;
        }
        let cmd = packet.command;
        if (!cmd.startsWith("/")) {
            return;
        }
        this.server.commandsList.dispatch(this.player, cmd.substring(1));
    }
}

module.exports = CommandRequestPacketHandler;
