import data from './data';

export default () => {
  return {
    header1: {
      title: {
        text: data.title
      },
      content: {
        text: data.content
      },
      button: {
        text: data.button,
        href: '',
        class: []
      },
      section: {
        class: []
      },
      images: [data.images[0]]
    },

    header2: {
      title: {
        text: data.title
      },
      content: {
        text: data.content
      },
      button: {
        text: data.button,
        href: '',
        class: []
      },
      section: {
        class: []
      },
      images: [data.images[0]]
    },

    section1: {
      section: {
        class: []
      },
      columns: [
        {
          title: data.title,
          content: data.content
        }, {
          title: data.title,
          content: data.content
        }
      ]
    },

    section2: {
      section: {
        class: []
      },
      columns: [
        {
          title: data.title,
          content: data.content
        }, {
          title: data.title,
          content: data.content
        }, {
          title: data.title,
          content: data.content
        }
      ]
    },

    social1: {
      section: {
        class: []
      },
      columns: [
        {
          title: data.caption,
          content: data.number
        }, {
          title: data.caption,
          content: data.number
        }, {
          title: data.caption,
          content: data.number
        }
      ]
    },

    social2: {
      section: {
        class: []
      },
      content: {
        text: data.content
      },
      images: data.logos
    }
  };
};