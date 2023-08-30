<script setup></script>

<template>
    <div>
        <div>
            <img src="https://picsum.photos/100" alt="Profile Picture">
        </div>
        <div>
            <form action="">
                <div>
                    <label for="fullname">Nama Lengkap</label>
                    <input type="text" name="fullname" id="fullname">
                </div>
                <div>
                    <label for="nik">NIK</label>
                    <input type="text" name="nik" id="nik">
                </div>
                <div>
                    <label for="phoneNumber">Nomor WA</label>
                    <input type="text" name="phoneNumber" id="phoneNumber">
                </div>
                <div>
                    <label for="ktp">Upload KTP</label>
                    <input type="file" name="ktp" id="ktp">
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
</template>
``