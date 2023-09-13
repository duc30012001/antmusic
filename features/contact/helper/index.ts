const CONTACT_MESSAGE_FIELDS = {
  name: 'Name',
  email: 'Email',
  subject: 'Subject',
  message: 'Message',
};

export const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ''
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<p
    style="
      font-size: 16px;
      line-height: 24px;
      margin: 16px 0;
    "
  >
    <b>${CONTACT_MESSAGE_FIELDS[key]}: </b>${val}
  </p>`);
  }, '');

  return {
    text: stringData,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <html lang="en">
      <head>
      <style type="text/css">
      * {
        font-size: 16px !important;
        }
        </style>
      </head>
    
      <body
        style="
          background-color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        "
      >
        ${htmlData}
      </body>
    </html>
    `,
  };
};
