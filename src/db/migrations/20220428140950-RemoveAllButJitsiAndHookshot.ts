import { QueryInterface } from "sequelize";

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete("dimension_bridges", {
            type: [
                "irc",
                "slack",
                "telegram",
                "webhooks"
            ],
        });
        await queryInterface.bulkDelete("dimension_widgets", {
            type: [
                "bigbluebutton",
                "custom",
                "etherpad",
                "googlecalendar",
                "googledocs",
                "grafana",
                "spotify",
                "tradingview",
                "twitch",
                "whiteboard",
                "youtube",
            ],
        });
    },
    down: (queryInterface: QueryInterface) => {
        return Promise.resolve();
        // TODO: Re-add all bridges and widgets
    }
}
