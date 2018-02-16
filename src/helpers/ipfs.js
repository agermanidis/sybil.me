import ipfsAPI from "ipfs-api";

const ipfs = ipfsAPI("ipfs.infura.io", "5001", { protocol: "https" });

const ipfsURL = hash => `https://ipfs.infura.io/ipfs/${hash}`;

export const uploadFileToIpfs = (file) => {
  return new Promise((resolve, reject) => {
    toBuffer(file, (err, buf) => {
      ipfs.files.add(buf, (err, resp) => {
        if (err) return reject();
        resolve(resp[0].hash);
      });
    });
  });
}

export const uploadStringToIpfs = async (str) => {
  const resp = await ipfs.files.add([new Buffer(str)]);
  return resp[0].hash;
};

export const ipfsCat = async (hash) => {
  const decoder = new TextDecoder("utf-8");
  const content = await ipfs.files.cat(hash);
  return decoder.decode(content);
}
