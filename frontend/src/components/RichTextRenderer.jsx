import React from 'react';

const getFormattedText = (child, i) => {
    let el = child.text;

    if (child.bold) el = <strong key={i}>{el}</strong>;
    if (child.italic) el = <em key={i}>{el}</em>;
    if (child.underline) el = <u key={i}>{el}</u>;
    if (child.code) el = <code key={i} className="bg-gray-800 text-green-400 px-1 rounded">{el}</code>;

    if (child.href) {
        el = (
            <a key={i} href={child.href} className="text-blue-500 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                {el}
            </a>
        );
    }

    return el;
};

const getText = (children) => {
    return children.map(getFormattedText);
};

const RichTextRenderer = ({ content }) => {
    if (!Array.isArray(content)) return null;

    const renderBlock = (block, index) => {
        switch (block.type) {
            case 'paragraph': {
                const text = getText(block.children || []);
                if (!text || text.length === 0) return null;
                return (
                    <p key={index} className="text-[#a0adba] text-sm font-normal leading-normal mb-2">
                        {text}
                    </p>
                );
            }

            case 'heading': {
                const level = block.level >= 1 && block.level <= 6 ? block.level : 2;
                const HeadingTag = `h${level}`;
                return (
                    <HeadingTag key={index} className="text-white font-bold mb-3">
                        {getText(block.children || [])}
                    </HeadingTag>
                );
            }

            case 'list': {
                const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
                return (
                    <ListTag
                        key={index}
                        className={`${
                            ListTag === 'ul' ? 'list-disc' : 'list-decimal'
                        } pl-6 text-[#a0adba] text-sm mb-4`}
                    >
                        {(block.children || []).map((item, i) => {
                            if (item.type === 'list-item') {
                                return (
                                    <li key={i}>
                                        {getText(item.children || [])}
                                    </li>
                                );
                            }
                            return null;
                        })}
                    </ListTag>
                );
            }

            case 'blockquote': {
                return (
                    <blockquote key={index} className="border-l-4 border-gray-600 pl-4 italic text-[#a0adba] mb-4">
                        {getText(block.children || [])}
                    </blockquote>
                );
            }

            case 'code': {
                return (
                    <pre key={index} className="bg-[#1e1e1e] text-green-300 text-sm p-4 rounded mb-4 overflow-auto">
                        <code>{block.code || getText(block.children || [])}</code>
                    </pre>
                );
            }

            case 'image': {
                if (!block.url) return null;
                return (
                    <img
                        key={index}
                        src={block.url}
                        alt={block.alt || ''}
                        className="my-4 max-w-full rounded"
                    />
                );
            }

            case 'horizontal-rule': {
                return <hr key={index} className="my-6 border-gray-600" />;
            }

            default:
                return null;
        }
    };

    return <div>{content.map(renderBlock)}</div>;
};

export default RichTextRenderer;
