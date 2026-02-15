
export const parseIRCMessage = (content: string, defaultName: string) => {
    // Regex for: **[Nick]** Content
    const match = content.match(/^\*\*\[(.+?)\]\*\*\s*(.*)/s);

    if (match) {
        return {
            isIRC: true,
            nick: match[1],
            message: match[2],
            originalContent: content
        };
    }

    return {
        isIRC: false,
        nick: defaultName,
        message: content,
        originalContent: content
    };
};
