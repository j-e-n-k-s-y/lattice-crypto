
// export type LatticeTypes = 



export enum LatticeTypes {
    SHARED_SECRET = 'SHARED_SECRET',
    SIGN_AND_VERIFY = 'SIGN_AND_VERIFY',
    ENCRYPT_DECRYPT = 'ENCRYPT_DECRYPT'
}

/**
 * Enum of all the algorithms currently supported
 */
export enum Algorithm {
    FRODO = 'Frodo',
    KYBER = 'Kyber',
    LIZARD = 'Lizard',
    NEW_HOPE = 'NewHope',
    RING_LIZARD = 'RingLizard',
}

/**
 * 
 */
export const AlgorithmSuppoprtedTypes: AlgorithmSupportedType[] = [
    { algorithm: Algorithm.NEW_HOPE, latticeTypes: [LatticeTypes.SHARED_SECRET]
        // LatticeTypes.SIGN_AND_VERIFY (TODO)
    },
    { algorithm: Algorithm.FRODO, latticeTypes: [LatticeTypes.SHARED_SECRET],
        // LatticeTypes.SIGN_AND_VERIFY (TODO)
    },
    { algorithm: Algorithm.KYBER, latticeTypes: [LatticeTypes.ENCRYPT_DECRYPT
    // LatticeTypes.SHARED_SECRET (TODO)
    ]},
    { algorithm: Algorithm.LIZARD, latticeTypes: [LatticeTypes.ENCRYPT_DECRYPT]
    // LatticeTypes.SHARED_SECRET (TODO)
    },
    { algorithm: Algorithm.RING_LIZARD, latticeTypes: [LatticeTypes.ENCRYPT_DECRYPT]
    // LatticeTypes.SHARED_SECRET (TODO)
    },
];

/**
 * This contains the types of supported actions that each fo the libraries have.
 */
export interface AlgorithmSupportedType {
    algorithm: Algorithm,
    latticeTypes: LatticeTypes[]
}


export interface AlgorithmSettings {
    algorithm: Algorithm,
    algorithmVariant: AlgorithmVariants
}


/**
 * This contains the algorithm variants for the supported types.
 */
export type AlgorithmVariants = NewHopeVariant | KyberVariant | FrodoVariant | LizardVariant | RingLizardVariant;

export enum NewHopeVariant {
    NEWHOPE_512 = 'NewHope-512-CCA', // TODO
    NEWHOPE_1024 = 'NewHope-1024-CCA'
}

export enum KyberVariant {
    KYBER_256 = 'Kyber256', 
    KYBER_512 = 'Kyber512', // TODO
    KYBER_768 = 'Kyber768', // TODO
    KYBER_1024 = 'Kyber1024', // TODO
    KYBER_512_90s = 'Kyber512-90s', // TODO
    KYBER_768_90s = 'Kyber968-90s', // TODO
    KYBER_1024_90s = 'Kyber1024-90s' // TODO
}

// TODO : for all
export enum FrodoVariant {
    FRODO_752 = 'FrodoKEM-752', // this is a rLWE problem.
    FRODO_640_AES = 'FrodoKEM-640-AES', // TODO
    FRODO_640_SHAKE = 'FrodoKEM-640-SHAKE', // TODO
    FRODO_976_AES = 'FrodoKEM-976-AES', // TODO
    FRODO_976_SHAKE = 'FrodoKEM-976-SHAKE', // TODO
    FRODO_1344_AES = 'FrodoKEM-1344-AES', // TODO
    FRODO_1344_SHAKE = 'FrodoKEM-1344-SHAKE', // TODO
}

export enum LizardVariant {
    LIZARD_544 = 'Lizard-544', // TODO
    LIZARD_608 = 'Lizard-608',
    LIZARD_736 = 'Lizard-736' // TODO
}

export enum RingLizardVariant {
    RING_LIZARD_1024 = 'RingLizard-1024'
}