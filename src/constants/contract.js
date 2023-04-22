export const CONTRACT_ADDRESS = '0x0eb07FB5167E4e228223cfB986FBa2771c567C8B';
export const CONTRACT_ABI = [
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"creator",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"string",
            "name":"name",
            "type":"string"
         }
      ],
      "name":"Create",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"getter",
            "type":"address"
         }
      ],
      "name":"Get",
      "type":"event"
   },
   {
      "inputs":[
         {
            "internalType":"string",
            "name":"_name",
            "type":"string"
         }
      ],
      "name":"createTask",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_index",
            "type":"uint256"
         }
      ],
      "name":"deleteTask",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"owner",
            "type":"address"
         }
      ],
      "name":"getList",
      "outputs":[
         {
            "components":[
               {
                  "internalType":"string",
                  "name":"name",
                  "type":"string"
               },
               {
                  "internalType":"bool",
                  "name":"completed",
                  "type":"bool"
               }
            ],
            "internalType":"struct Todo.Task[]",
            "name":"",
            "type":"tuple[]"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"owner",
            "type":"address"
         }
      ],
      "name":"getListSize",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"owner",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"_index",
            "type":"uint256"
         }
      ],
      "name":"getTask",
      "outputs":[
         {
            "components":[
               {
                  "internalType":"string",
                  "name":"name",
                  "type":"string"
               },
               {
                  "internalType":"bool",
                  "name":"completed",
                  "type":"bool"
               }
            ],
            "internalType":"struct Todo.Task",
            "name":"",
            "type":"tuple"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_index",
            "type":"uint256"
         }
      ],
      "name":"updateTask",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   }
];