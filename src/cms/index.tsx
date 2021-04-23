import CMS from "netlify-cms-app";

CMS.registerEditorComponent({
    id: "audio",
    label: "Audio",
    fields: [{name: "audioFileName", label: "Audio Filename" , widget: "string"}],
    pattern: /`audio: (\S+)`/,
    fromBlock: function(match) {
        return {
          id: match[1]
        };
      },
    toBlock: function (obj) {
        return "`audio: " + obj.id + "`";
    },
    toPreview: function(obj) {
        return "Audio: <b>" + obj.id + "</b>";
    }
});