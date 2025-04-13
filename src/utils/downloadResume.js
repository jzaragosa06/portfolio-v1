import saveAs from 'file-saver';

const downloadResume = async () =>
{
    try
    {
        const response = await fetch("/resume.pdf");
        if (!response.ok) throw new Error('error network response');

        const blob = await response.blob();
        saveAs(blob, 'Zaragosa, Resume.pdf');
    } catch (error)
    {
        console.log('error downloading pdf: ', error.message);

    }
}

export default downloadResume;