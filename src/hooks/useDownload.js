const onDownload = (
  fileContent,
  { type, name, extension } = {
    type: 'text/csv',
    name: 'file',
    extension: 'csv',
  }
) => {
  const element = document.createElement('a');
  const file = new Blob([fileContent], { type });
  element.href = URL.createObjectURL(file);
  element.download = `${name}.${extension}`;
  element.click();
};

const useDownload = () => {
  const downloadToFile = (value, options) => {
    onDownload(value, options);
  };

  return { downloadToFile };
};

export default useDownload;
