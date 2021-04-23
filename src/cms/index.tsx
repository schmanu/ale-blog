import CMS from "netlify-cms-app";

CMS.registerEditorComponent({
    id: "audio",
    label: "Audio",
    fields: [{name: "audioFileName", label: "Audio File" , widget: "file"}],
    pattern: /`audio: (\S+)`/,
    fromBlock: function(match) {
        return {
            audioFileName: match[1]
        };
      },
    toBlock: function (obj) {
        return "`audio: " + obj.audioFileName + "`";
    },
    toPreview: function(obj) {
        return "Audio: <b>" + obj.audioFileName + "</b>";
    }
});